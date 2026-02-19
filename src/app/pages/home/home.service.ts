import { getLocalStorageData } from "../user/login.service";

export async function getHeadingText() {
  return "This application allow you to create to do list";
}

export async function showAlert() {
  alert("This is an alert message!");
}

export async function checkLogin() {
  const profileData: any = await getLocalStorageData();

  if (profileData?.token && profileData?.userId) {
    return true;
  } else {
    return false;
  }
}
