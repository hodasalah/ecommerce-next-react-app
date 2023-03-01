export const validateEmail = (email) =>
{
  const regexTst = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  return regexTst.test(email)
}