class GitService {
    validateRepository(url: string): boolean {
        const regex = /^(https?:\/\/)?(www\.)?(github\.com|gitlab\.com|bitbucket\.org)\/.+\/.+\.git$/;
        return regex.test(url);
    }

    async uploadRepository(url: string): Promise<void> {
        if (!this.validateRepository(url)) {
            throw new Error('Invalid repository URL');
        }

        // Logic to upload the repository goes here
        console.log(`Uploading repository from ${url}...`);
        // Simulate upload process
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Repository uploaded successfully.');
    }
}

export default GitService;