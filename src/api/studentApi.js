const studentList = [];
const studentApi = () => {
    const studentPost = (student) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                studentList.push(student);
                resolve(student);
            }, 1000)
        })
    }
    const studentGet = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(studentList);
            }, 2000)
        })
    }
    return {
        studentPost, studentGet
    }
}

export default studentApi;