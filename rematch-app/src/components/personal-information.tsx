import { useState } from "react";
import { connect } from "react-redux";
import { Dispatch, RootState } from "../store/store";
import { users } from "../data/users";
import { PersonalInfo } from "../models/personal-info";


function PersonalInformation(props: any) {
  const [fetching, setFetching] = useState(false);
  const [next, setNext] = useState(0);

  const getNext = () => {
    setNext(nx => {
      if(nx >= users.length) {
        return 1;
      }
      return nx + 1;
    });

    setFetching(true);
    props.getPersonalInfo(next || 1)
         .then((response: PersonalInfo) => {
           console.log('response: ', response);
           setFetching(false);
         });
  }

  return (
    <div className="col-sm-6">
       <h3>Personal Info</h3>
      <p>{ fetching ? 'Fetching user info...' : '--'}</p>
      <p>
        <strong>User Id:</strong> { props.personalInfo?.userId }
      </p>
      <p>
        <strong>Firstname:</strong> { props.personalInfo?.firstname }
      </p>
      <p>
        <strong>Lastname:</strong> { props.personalInfo?.lastname }
      </p>
      <button onClick={getNext} className="btn btn-primary">Next Information</button>
    </div>
  )
}

const mapState = (state: RootState) => ({
  personalInfo: state.user.personalInfo,
});

const mapDispatch = (dispatch: Dispatch) => ({
  getPersonalInfo: dispatch.user.getPersonalInfo,
});

export default connect(mapState, mapDispatch)(PersonalInformation) 