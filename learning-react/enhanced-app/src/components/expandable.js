import React from 'react';

const Expandable = ComposedComponent =>
    class Expandable extends React.Component
    {
        constructor(props){
            super(props);
            const collapsed = (props.hidden && props.hidden === true)? true :  false;
            this.state = {collapsed};
            this.expandCollapse = this.expandCollapse.bind(this);
        }
        expandCollapse(){
            let collapsed = !this.state.collapsed;
            this.setState({collapsed});
        }
        render(){
            return (<ComposedComponent expandCollapse={this.expandCollapse} {...this.props} {...this.state} />)
        }
    };
export default Expandable;