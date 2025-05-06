import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {
        /*
          Main Container
            - Video Background
            - Video Title
          Secoundary Contianer
            - MovieList * n
            - cards * n
        */
      }
    </div>
  )
}

export default Browse