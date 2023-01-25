import Vuex from 'vuex';
import axios from 'axios';

export default new Vuex.Store({
  state: {
    symbol: '',
    data: null,
    loading: false,
    error: null
  },
  mutations: {
    setSymbol(state, symbol) {
      state.symbol = symbol;
    },
    setData(state, data) {
      state.data = data;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    }
  },
  actions: {
    fetchData({ commit }, symbol) {
      commit('setLoading', true);
      commit('setError', null);
      axios.get(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?metrics=close?&interval=1d&range=5d`)
        .then(response => {
          commit('setData', response.data);
        })
        .catch(error => {
          commit('setError', error);
        })
        .finally(() => {
          commit('setLoading', false);
        });
    }
  }
});