import React from "react";

const App = () => {
  // Os `dados` do Estado serão definidos o valor da API
  const [data, setData] = React.useState(null);

  // Efetuando um `fetch` na API que lista todos os dados da API
  React.useEffect(() => {
    fetch("http://localhost:1010/reserve.io/v1/read")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  // Verificando um valor em `data`
  if (data === null) return null;
  return (
    <table>
      <caption>reserve.io</caption>
      <thead>
        <tr>
          <th>user name</th>
          <th>equipment name</th>
          <th>local</th>
          <th>status</th>
          <th>time in</th>
          <th>date in</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({
            id,
            user_name,
            equipment_name,
            local,
            status,
            time_in,
            date_in,
          }) => (
            <tr key={id}>
              <td>{user_name}</td>
              <td>{equipment_name}</td>
              <td>{local}</td>
              <td>{status}</td>
              <td>{time_in}</td>
              <td>{date_in}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default App;
