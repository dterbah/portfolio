/* Create unique id */
const createPID = (): string => {
  return new Date().toISOString();
};

export default createPID;
