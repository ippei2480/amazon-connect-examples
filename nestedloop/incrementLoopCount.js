exports.handler = async (event) => {
  console.log(JSON.stringify(event));
  let currentCount = event.Details.ContactData.Attributes[event.Details.Parameters.target];
  currentCount++;
  const response = {
    responseCount: currentCount
  };
  return response;
};
