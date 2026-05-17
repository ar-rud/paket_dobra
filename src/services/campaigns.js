/**
 * Campaigns Service
 *
 * Handles all campaign/fundraising related operations:
 * - Fetch all campaigns
 * - Fetch campaign by ID
 * - Get campaign details with progress
 * - Link/unlink products to campaigns
 * - Update campaign info
 */

import apiCall from './api';

const campaignImageFallbacks = {
  201: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80",
  202: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
};

function shuffle(array) {
  const items = [...array];

  for (let index = items.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[randomIndex]] = [items[randomIndex], items[index]];
  }

  return items;
}

function resolveCampaignImage(campaign) {
  if (campaign.imageUrl?.startsWith("http")) {
    return campaign.imageUrl;
  }

  return campaignImageFallbacks[campaign.id] ?? campaignImageFallbacks[201];
}

function normalizeCampaign(campaign, organizationsMap) {
  return {
    id: campaign.id,
    title: campaign.title,
    category: campaign.tag,
    foundation: organizationsMap.get(campaign.organizationId) ?? "Організація",
    collected: campaign.gatheredAmount,
    goal: campaign.targetAmount,
    image: resolveCampaignImage(campaign),
  };
}

export async function getCampaigns() {
  const [campaigns, organizations] = await Promise.all([
    apiCall("/campaigns"),
    apiCall("/organizations"),
  ]);

  const organizationsMap = new Map(
    organizations.map((organization) => [organization.id, organization.name]),
  );

  return campaigns.map((campaign) => normalizeCampaign(campaign, organizationsMap));
}

export async function getRandomCampaigns(limit = 3) {
  const campaigns = await getCampaigns();
  return shuffle(campaigns).slice(0, limit);
}
