# note:ro

This is a [Docusaurus 2](https://docusaurus.io/) server in a docker container.  
The goal of this is to serve the notes in my Obsidian Vault in a nice looking, wiki-like website :)

## Running

You will need a notes directory containing a `home.md` file on it's root and a [docusaurus.config.js](docusaurus.config.js) file.

Then, run with a docker command:

```sh
  docker run -d -p 3000:3000 -v /path/to/notes:/app/notes -v /path/to/docusaurus.config.js:/app/docusaurus.config.js --name note-ro nataliabf/note-ro
```

Or with docker compose:

```yaml
version: "3.8"

services:
  note-ro:
    image: nataliabf/note-ro
    container_name: note-ro
    volumes:
      - /path/to/notes:/app/notes
      - /path/to/docusaurus.config.js:/app/docusaurus.config.js
    ports:
      - 3000:3000
    restart: unless-stopped
```

The website will run on <http://localhost:3000>.
