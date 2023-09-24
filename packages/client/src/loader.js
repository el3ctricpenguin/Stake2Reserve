export async function rootLoader() {
  let hasConnected = false;
  let account = "";
  let { ethereum } = window;
  if (ethereum) {
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      hasConnected = true;
      account = accounts[0];
    }
  }
  return { hasConnected, account };
}
