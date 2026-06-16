import {
  commentsTasks, dataTypesTasks, typecastingTasks, arithmeticTasks,
  assignmentTasks, comparisonTasks, logicalTasks, identityTasks,
  membershipTasks, bitwiseTasks,
} from "./practice-topic-builders.mjs";

import {
  stringCreateTasks, stringFormatTasks, stringIndexTasks, stringSliceTasks,
  stringMethodTasks, listCreateTasks, listPropertiesTasks, listIndexTasks,
  listSliceTasks, listMethodTasks, listModifyTasks,
} from "./practice-topic-builders-part2.mjs";

import {
  tupleSyntaxTasks, tuplePropertiesTasks, tupleIndexTasks, tupleSliceTasks,
  tupleMethodTasks, setSyntaxTasks, setUpdateTasks, setOperationsTasks,
  setMethodTasks, dictSyntaxTasks, dictKeysValuesTasks, dictAccessTasks,
  dictMethodTasks, ifStatementTasks, ifElseTasks, ifElifElseTasks,
  whileLoopTasks, forLoopTasks, breakContinueTasks, passStmtTasks, rangeFnTasks,
  listCompTasks, compUsesTasks, dictCompTasks, createFunctionTasks,
  callFunctionTasks, functionArgsTasks, functionVarsTasks, recursionTasks,
  lambdaTasks, introTopicTasks,
  finalProjectOverviewTasks, finalProjectDataTasks, finalProjectLogicTasks,
  finalProjectFunctionsTasks, finalProjectCapstoneTasks,
} from "./practice-topic-builders-part3.mjs";

/** Maps every curriculum topic to a concept-aligned task builder. */
export const TOPIC_BUILDERS = {
  "m1-t1": null, // hand-crafted in module-1.ts
  "m1-t2": introTopicTasks,
  "m1-t3": introTopicTasks,
  "m1-t4": introTopicTasks,
  "m2-t1": null, // ENHANCED in generator
  "m2-t2": commentsTasks,
  "m2-t3": null, // ENHANCED in generator
  "m2-t4": dataTypesTasks,
  "m2-t5": typecastingTasks,
  "m3-t1": arithmeticTasks,
  "m3-t2": assignmentTasks,
  "m3-t3": comparisonTasks,
  "m3-t4": logicalTasks,
  "m3-t5": identityTasks,
  "m3-t6": membershipTasks,
  "m3-t7": bitwiseTasks,
  "m4-t1": stringCreateTasks,
  "m4-t2": stringFormatTasks,
  "m4-t3": stringIndexTasks,
  "m4-t4": stringSliceTasks,
  "m4-t5": stringMethodTasks,
  "m5-t1": listCreateTasks,
  "m5-t2": listPropertiesTasks,
  "m5-t3": listIndexTasks,
  "m5-t4": listSliceTasks,
  "m5-t5": listMethodTasks,
  "m5-t6": listModifyTasks,
  "m6-t1": tupleSyntaxTasks,
  "m6-t2": tuplePropertiesTasks,
  "m6-t3": tupleIndexTasks,
  "m6-t4": tupleSliceTasks,
  "m6-t5": tupleMethodTasks,
  "m7-t1": setSyntaxTasks,
  "m7-t2": setUpdateTasks,
  "m7-t3": setOperationsTasks,
  "m7-t4": setMethodTasks,
  "m8-t1": dictSyntaxTasks,
  "m8-t2": dictKeysValuesTasks,
  "m8-t3": dictAccessTasks,
  "m8-t4": dictMethodTasks,
  "m9-t1": ifStatementTasks,
  "m9-t2": ifElseTasks,
  "m9-t3": ifElifElseTasks,
  "m10-t1": whileLoopTasks,
  "m10-t2": forLoopTasks,
  "m10-t3": breakContinueTasks,
  "m10-t4": passStmtTasks,
  "m10-t5": rangeFnTasks,
  "m11-t1": listCompTasks,
  "m11-t2": compUsesTasks,
  "m11-t3": dictCompTasks,
  "m12-t1": createFunctionTasks,
  "m12-t2": callFunctionTasks,
  "m12-t3": functionArgsTasks,
  "m12-t4": functionVarsTasks,
  "m12-t5": recursionTasks,
  "m13-t1": lambdaTasks,
  "m14-t1": finalProjectOverviewTasks,
  "m14-t2": finalProjectDataTasks,
  "m14-t3": finalProjectLogicTasks,
  "m14-t4": finalProjectFunctionsTasks,
  "m14-t5": finalProjectCapstoneTasks,
};

export function getTopicTasks(topicId, title) {
  const builder = TOPIC_BUILDERS[topicId];
  if (builder) return builder(topicId, title);
  return null;
}
