import { connect } from 'react-redux';
import Main from '../components/Main';

  const mapStateToProps = state => {
    return {}
  }

  const mapDispatchToProps = dispatch => {

    return {
      onLoad: () => {
      }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Main)
