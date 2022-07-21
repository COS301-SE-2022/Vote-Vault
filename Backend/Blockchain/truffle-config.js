module_exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" //Any network ID
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}