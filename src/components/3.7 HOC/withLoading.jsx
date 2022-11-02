import React, { useEffect, useState } from "react";

export default function withLoading(Component) {
  const WithLoadingComponent = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const Timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(Timer);
    });

    return loading ? <p>...Loading</p> : <Component {...props} />;
  };
  return WithLoadingComponent;
}
