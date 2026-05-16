import { getUserById } from '/src/services/users';
import { getProductsBySellerId } from '/src/services/products';

const SOLD_STATUS = 'SOLD';
const DRAFT_STATUS = 'DRAFT';

function mapUserIdentity(user) {
	return {
		avatarSrc: user.avatarUrl || null,
		avatarAlt: `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Користувач',
		name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.username || 'Користувач',
		username: user.username || '',
		levelLabel: user.level ? `${user.level} level` : '',
	};
}

function mapImpactStats(user) {
	return {
		title: 'Ваша допомога:',
		value: user.totalDonated ? `${user.totalDonated} грн` : '0 грн',
	};
}

function mapRewards(userRewards) {
	if (!Array.isArray(userRewards) || !userRewards.length) {
		return null;
	}

	const levels = userRewards
		.filter((reward) => reward && typeof reward === 'object')
		.map((reward) => ({
			id: reward.id,
			label: reward.label,
			unlocked: !!reward.unlocked,
			iconSrc: reward.iconSrc || null,
			iconAlt: reward.iconAlt || reward.label || '',
		}));

	if (!levels.length) {
		return null;
	}

	return {
		title: 'Нагороди:',
		levels,
	};
}

function mapProductsToListingsByTab(products) {
	const listings = {
		announcements: [],
		drafts: [],
		orders: [],
	};

	for (const product of products) {
		const firstImage = Array.isArray(product.images) ? product.images[0] : null;
		const baseCard = {
			id: `prod-${product.id}`,
			imageSrc: firstImage || null,
			imagePlaceholder: !firstImage,
			imageAlt: product.title || 'Продукт',
			title: product.title || '',
			subtitle:
				product.status === DRAFT_STATUS
					? null
					: product.status === SOLD_STATUS
						? 'Статус: продано'
						: 'Статус: продається',
			priceText: product.price ? `від ${product.price} ${product.currency || 'грн'}` : '0 грн',
			showMessageAction: product.status !== DRAFT_STATUS,
			showDeleteAction: true,
			primaryActionLabel: product.status === SOLD_STATUS ? 'Відслідкувати' : 'Редагувати',
			muted: false,
			imageMuted: false,
			actionsDisabled: false,
		};

		if (product.status === DRAFT_STATUS) {
			listings.drafts.push(baseCard);
			continue;
		}

		if (product.status === SOLD_STATUS) {
			listings.announcements.push({
				...baseCard,
				muted: true,
				imageMuted: true,
				actionsDisabled: true,
			});
			listings.orders.push(baseCard);
			continue;
		}

		listings.announcements.push(baseCard);
	}

	return listings;
}

export async function getProfileData(userId) {
	if (userId == null) {
		throw new Error('getProfileData: userId is required');
	}

	const [user, products] = await Promise.all([
		getUserById(userId),
		getProductsBySellerId(userId),
	]);

	if (!user) {
		throw new Error(`User not found for id=${userId}`);
	}

	return {
		userIdentity: mapUserIdentity(user),
		impactStats: mapImpactStats(user),
		rewards: mapRewards(user.rewards),
		listingsByTab: mapProductsToListingsByTab(Array.isArray(products) ? products : []),
	};
}

export default {
	getProfileData,
};
