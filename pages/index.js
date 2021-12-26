import { getFeaturedEvents } from '../dummy-data';

function HomePage() {
  const FeaturedEvents = getFeaturedEvents();

  return (
    <div>
      <ul></ul>
    </div>
  );
}

export default HomePage;
