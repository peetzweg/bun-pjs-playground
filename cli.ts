import cac from "cac";
import { apply } from "./src/features/apply";
import { cidForFile } from "./src/features/cid";
import { sudoXcm } from "./src/features/sudoxcm";

const cli = cac("pop");

// apply
cli
  .command(
    "apply <amount>",
    "create new accounts and apply for Proof of Personhood"
  )
  // TODO evidence hash
  // .option("-a, --amount <amount>", "number of accounts to create")
  .action(async (amount, options) => {
    console.log({ amount, options });
    await apply(Number(amount));
  });

// cid
cli
  .command("cid <file_path>", "returns the CID of given file")
  .action(async (filePath) => {
    await cidForFile(filePath);
  });

// sudoxcm
cli
  .command("sudoxcm <encoded_call>", "returns the CID of given file")
  .action(async (encodedCall) => {
    await sudoXcm(encodedCall);
  });

// Setup help
cli.help();

try {
  // Parse CLI args without running the command
  cli.parse(process.argv, { run: false });
  // Run the command yourself
  // You only need `await` when your command action returns a Promise
  await cli.runMatchedCommand();
} catch (error) {
  if (error instanceof Error) console.error(error.message);
  else {
    console.error(error);
  }

  process.exit(1);
}
process.exit(0);