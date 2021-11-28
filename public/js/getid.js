const getUid = async () => {
  const response = await fetch("/api/user/uid");
  const uid = await response.json();
  return uid;
};