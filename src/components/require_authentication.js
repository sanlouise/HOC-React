import React, { Component } from 'react';
import { connect } from 'react-redux';


export default function(ComposedComponent) {

	static contextTypes = {
		router: React.PropTypes.object
	}

	class Authentication extends Component {
		render() {
			console.log(this.context);
			return <ComposedComponent {...this.props} />
		}
	}


	function mapStateToProps(state) {
		return { authentication: state.authenticated };
	}

	return connect(mapStateToProps)(Authentication);
}


