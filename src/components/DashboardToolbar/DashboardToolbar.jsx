import Tabs from '../Tabs/Tabs.jsx';
import AddListingButton from '../AddListingButton/AddListingButton.jsx';
import './DashboardToolbar.css';

export default function DashboardToolbar({ tabs, addListingLabel }) {
  return (
    <div className="dashboard-toolbar">
      <Tabs tabs={tabs} />
      <AddListingButton label={addListingLabel} />
    </div>
  );
}