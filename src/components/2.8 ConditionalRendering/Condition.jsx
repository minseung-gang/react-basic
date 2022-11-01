import React from "react";

function UserGreeting(props) {
  return (
    <h1>
      {props.name && `${props.name},`} Welcome It's {props.count} times
    </h1>
    /* props의 name이 있을때 name을 출력한다 */
  );
}
function GuestGreeting() {
  return <h1>Please, sign up</h1>;
}
function Greeting(props) {
  return props.isLoggedIn ? (
    <UserGreeting name={"minseung"} count={1} />
  ) : (
    <GuestGreeting />
  );
  /* isLoggedIn이 true일때, UserGreeting컴포넌트를 넣고 아니면 GuestGreeting을 넣는다 - 삼항연산자(?:) */
}

export default function Condition() {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn}></Greeting>
    </div>
  );
}
