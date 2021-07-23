import { MockedPullNumbers } from "assets/records"
import { uniqueId } from "lodash"
import { EVENTS, NodeEnvs } from "src/utils"

type Env = {
  PULL_NUMBER: MockedPullNumbers,
  BASE_SHA: string,
  HEAD_SHA: string,
  GITHUB_TOKEN: string,
  NODE_ENV: NodeEnvs,
  REPO_OWNER_NAME: string
  REPO_NAME: string,
  WORKFLOW_ID: string,
  GITHUB_REPOSITORY: string,
  EVENT_TYPE: EVENTS
}

const _envFactory = <B extends Partial<Env>>(base: B) => <O extends Partial<Env>, >(overrides: O): B & O & NodeJS.ProcessEnv => ({
  ...process.env,
  ...base,
  ...overrides
})

export const envFactory = _envFactory({
  REPO_OWNER_NAME: "ethereum",
  REPO_NAME: "EIPs",
  GITHUB_TOKEN: uniqueId(),
  NODE_ENV: NodeEnvs.mock,
  GITHUB_REPOSITORY: "ethereum/EIPs",
  EVENT_TYPE: EVENTS.pullRequestTarget,
})




