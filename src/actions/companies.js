import database from "../firebase/firebase";

// SET COMPANIES
export const setCompanies = (companies) => ({
    type: 'SET_COMPANIES',
    companies
});


// SET STARTING COMPANIES
export const setDefaultCompanies = () => {
    return (dispatch) => {
        return database.ref('companies')
            .once('value')
            .then((snapshot) => {
                const companies = [];

                snapshot.forEach((childSnapshot) => {
                    companies.push({
                        ...childSnapshot.val(),
                        id: childSnapshot.key
                    });
                });
                console.log(companies);
                dispatch(setCompanies(companies));
            });
    };
};
        
    
