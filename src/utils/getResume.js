const fileId = "1I35i9rNqS1rYCi4uEy7kAzDp2DxDl03X";

// Construct the download URL
const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

// Event handler function to handle the button click
export const handleResumeDownload = () => {
  // Create a temporary link element
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.setAttribute("download", ""); // This is optional. You can specify the download attribute if you want a custom filename.

  // Append the link to the document, simulate a click, and then remove the link
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
