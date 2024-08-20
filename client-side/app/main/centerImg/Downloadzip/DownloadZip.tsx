const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Ericka Archer setup (x86_64).exe';  // Adjust the path to match where the file is located in your public directory
    link.download = 'Ericka Archer'; // Adjust the file name as desired
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up by removing the link element
}
export default handleDownload;