const Diff = (text) => {
    let Hunk = (lines) => {
        // Each line will be split into type and text properties
        return {

        };
    }
    let hunks = [];
    let lines;
    let initialize = () => {
        lines = text.split(/\n/);
        lines.forEach(line => {
            if(line.startsWith("@@"))
            {
                hunks.push(line);
            }
        });
    };
    initialize();
    return {
        get hunks() {
            return hunks;
        }
    };
};
export { Diff };