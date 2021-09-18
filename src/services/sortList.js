// esta função foi ideia de uma das pessoas mais fodas que tive o prazer de conhecer na Trybe
// colega Lucar Caribé!

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
