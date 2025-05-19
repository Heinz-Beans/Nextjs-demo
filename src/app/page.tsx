import { getMatches } from '@/lib/data';
import Link from 'next/link';

export default async function Home() {

  const data = await getMatches();
  console.log('data :>> ', data);

  return (
    <div>
      <h1>tu bude homepage</h1>
      <div>searchbar</div>
      <div>filter bubbles</div>
      <div>
        <h2>match listing</h2>
        <div>
          <h3>match[x]</h3>
          <div>match[x] simplified details</div>
        </div>
      </div>
      <div>
        <h2>match full detail - same component as match detail route</h2>
        <div>map name</div>
        <div>team1 name</div>
        <div>score</div>
        <div>team2 name</div>
        <div>team1 playerlist</div>
        <div>team2 playerlist</div>
      </div>
      <Link href="/match/1" target="_blank">
        <span>open match detail in new tab</span>
      </Link>
    </div>
  );
}
