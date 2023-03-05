export default Helpers = {
    getDuration: (duration) => {
        const [part1, part2] = duration.split(' - ');

        const part1Date = new Date();
        let part2Date = new Date();

        const [month1, year1] = part1.split('/');

        part1Date.setDate(1);
        part1Date.setMonth(month1 - 1);
        part1Date.setFullYear(year1);
        
        if (part2.includes('/')) {
            
            const [month2, year2] = part2.split('/');
            
            part1Date.setDate(1);
            part2Date.setMonth(month2 - 1);
            part2Date.setFullYear(year2);
        }

        const difference = part2Date - part1Date;

        return difference;

    }
}