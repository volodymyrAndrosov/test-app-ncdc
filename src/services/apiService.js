import axios from "axios";

const fetchRandomUser = async props => {
  const { setData, page, perPage = 10, setError, filter } = props;
  const seed = filter ? filter : "abc";

  try {
    const { data } = await axios.get(`https://randomuser.me/api/?page=${page}&results=${perPage}&seed=${seed}`);
    setData(data.results);
    setError(null);
  } catch (error) {
    setError(error);
  }
};

export { fetchRandomUser };
