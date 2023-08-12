import { Problem } from "@utils/types";

export const MOCK_PROBLEM: Problem = {
    title: "3. Longest Substring Without Repeating Characters",
    description: "Given a string `s`, find the length of the **longest substring** without repeating characters.",
    testCases: [
        { input: "abcabcbb", output: "3", explanation: "The answer is 'abc', with the length of 3." },
        { input: "bbbbb", output: "1", explanation: "The answer is 'b', with the length of 1." },
        { input: "pwwkew", output: "3", explanation: "The answer is 'wke', with the length of 3." },
    ],
    constraints: ["`0 <= s.length <= 5 * 104`", "`s` consists of English letters, digits, symbols and spaces."],
    initialCode: {
        typescript: `
function lengthOfLongestSubstring(s: string): number {

};
    `.trim(),
    },
};
