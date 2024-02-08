function callService(data) {
  var url =
    "http://" + apex.item("P0_IP_MAQUINA").getValue() + ":3005/imprimir";
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log("Error:", error))
    .then((response) => console.log("Success:", response));
}

function print(processName) {
  apex.server.process(
    processName,
    {},
    {
      success: function (pData) {
        callService(pData);
      },
    },
    { dataType: "text" }
  );
}
