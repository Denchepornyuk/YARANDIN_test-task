import { connect } from 'react-redux';
import { selectFilmsList,
  selectFilmsError,
  selectIsLoading } from '../../store/selectors';
import { loadFilms } from '../../store/actions';
import FilmsPage from './FilmsPage';

const mapStateToProps = state => ({
  films: selectFilmsList(state),
  error: selectFilmsError(state),
  isLoading: selectIsLoading(state),
});

export default connect(mapStateToProps, { loadFilms })(FilmsPage);
