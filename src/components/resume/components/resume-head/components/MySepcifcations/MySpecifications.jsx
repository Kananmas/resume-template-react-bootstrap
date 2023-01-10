export default function MySpecifications(props) {
  return (
    <>
      <div className=" col-2">
        <img
          className="rounded my-2"
          src={props.imgURL}
          alt="my picture"
          style={{ width: "100px", height: "100px" }}
        />
        <h3>{props.name + " " + props.familyname}</h3>
        <div className="text">{props.mail}</div>
        <div className="text">{props.phoneNumber} </div>
        <div className="my-4">{props.address}</div>
      </div>
    </>
  );
}
