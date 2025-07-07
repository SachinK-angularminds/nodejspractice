const { MongoClient } = require("mongodb");


class MongodbClient {
  constructor(clienturi) {
    this.client = new MongoClient(clienturi);
  }

  async main() {
    try {
      // Connect to the MongoDB cluster
      await this.client.connect();

      // Make the appropriate DB calls
      await this.listDatabases(this.client);
    } catch (e) {
      console.error(e);
    } finally {
      await this.client.close();
    }
  }
  async listDatabases(client) {
    let databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
  }
}
module.exports = MongodbClient;
