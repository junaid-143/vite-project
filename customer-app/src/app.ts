import express from 'express';
import bodyParser from 'body-parser';
import { GitService } from './services/gitService';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const gitService = new GitService();

app.post('/upload', async (req, res) => {
    const { repoUrl } = req.body;

    if (!gitService.validateRepository(repoUrl)) {
        return res.status(400).json({ error: 'Invalid repository URL' });
    }

    try {
        await gitService.uploadRepository(repoUrl);
        res.status(200).json({ message: 'Repository uploaded successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to upload repository' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});