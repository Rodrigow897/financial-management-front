type month = {
    index(name: string, index: any): unknown;
    id: string;
    name: string;
}


 export const months: month[] = [
    {
        id: '1', name: 'Jan',
        index: function (name: string, index: any): unknown {
            throw new Error("Function not implemented.");
        }
    },
    {
        id: '2', name: 'Fev',
        index: function (name: string, index: any): unknown {
            throw new Error("Function not implemented.");
        }
    },
    {
        id: '3', name: 'Mar',
        index: function (name: string, index: any): unknown {
            throw new Error("Function not implemented.");
        }
    },
    {
        id: '4', name: 'Abr',
        index: function (name: string, index: any): unknown {
            throw new Error("Function not implemented.");
        }
    },
    {
        id: '5', name: 'Mai',
        index: function (name: string, index: any): unknown {
            throw new Error("Function not implemented.");
        }
    },
    {
        id: '6', name: 'Jun',
        index: function (name: string, index: any): unknown {
            throw new Error("Function not implemented.");
        }
    },
    {
        id: '7', name: 'Jul',
        index: function (name: string, index: any): unknown {
            throw new Error("Function not implemented.");
        }
    },
    {
        id: '8', name: 'Ago',
        index: function (name: string, index: any): unknown {
            throw new Error("Function not implemented.");
        }
    },
    {
        id: '9', name: 'Set',
        index: function (name: string, index: any): unknown {
            throw new Error("Function not implemented.");
        }
    },
    {
        id: '10', name: 'Out',
        index: function (name: string, index: any): unknown {
            throw new Error("Function not implemented.");
        }
    },
    {
        id: '11', name: 'Nov',
        index: function (name: string, index: any): unknown {
            throw new Error("Function not implemented.");
        }
    },
    {
        id: '12', name: 'Dez',
        index: function (name: string, index: any): unknown {
            throw new Error("Function not implemented.");
        }
    }
 ]

 export default months;