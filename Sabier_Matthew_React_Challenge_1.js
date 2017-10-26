const episodes = [
  { id: 's06e01', title: 'Pilot' },
  { id: 's06e02', title: 'Top Banana' },
  { id: 's06e03', title: 'Charity Drive' },
  { id: 's06e04', title: 'Visiting Ours' },
  { id: 's06e05', title: 'My Mother, the Car' },
  { id: 's06e06', title: 'In God We Trust' },
  { id: 's06e07', title: 'Storming the castle' },
  { id: 's06e08', title: 'Pier Pressure' },
  { id: 's06e09', title: 'Public Relations' },
];

const finaleEpisode = { id: 's06e10', title: 'Bringing Up Buster' };
  
const addToPlaylist = (playlist, episode)=>playlist.concat([episode]);
const removeFromPlaylist = (playlist, episode)=>playlist.filter(e=>e.id !== episode.id);
const getNextEpisodeInPlaylist = (episodes)=>episodes[0];

function bingeWatch(episodes){
  if(episodes.length==0){
    return 'Please let there be more!';
  }
  const nextEpisode = getNextEpisodeInPlaylist(episodes);

  
  console.log(nextEpisode)
  console.log(episodes.length)
  
  
  return bingeWatch(removeFromPlaylist(episodes, nextEpisode) );
}
bingeWatch(addToPlaylist(episodes, finaleEpisode));
