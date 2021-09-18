// esta função foi ideia de uma das pessoas mais fodas que tive o prazer de conhecer na Trybe
<<<<<<< HEAD
// colega Lucas Caribé!
=======
// colega Lucar Caribé!
>>>>>>> b3611e11c28d063607aa239360e7bd5186884cdc

export default function sortList(list, type, key) {
  if (type === 'ASC') {
    list.sort((a, b) => a[key].localeCompare(b[key], undefined, { numeric: true }));
    return list;
  }

  if (type === 'DESC') {
    list.sort((a, b) => b[key].localeCompare(a[key], undefined, { numeric: true }));
    return list;
  }
}
