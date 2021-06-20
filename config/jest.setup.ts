import util from "util";
import { exec } from "child_process";
const execP = util.promisify(exec);

module.exports = async () => {
  await execP("docker-compose -f docker-compose.test.yml up -d ");
};
