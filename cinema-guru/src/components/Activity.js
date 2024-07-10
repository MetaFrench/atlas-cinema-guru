import './components.css';

function Activity({ activity }) {
  return (
    <li><p>{`${activity.user.username} added ${activity.title.title} to ${activity.activityType} - ${activity.updatedAt}`}</p></li>
  )
}

export default Activity;