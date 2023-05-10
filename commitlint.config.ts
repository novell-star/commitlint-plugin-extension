import type { UserConfig, Commit, RuleConfigCondition, RuleOutcome } from "@commitlint/types";

const Configurations: UserConfig = {
    extends: ["@commitlint/config-conventional"],
    plugins: [],
    rules: {},
};

module.exports = Configurations;
