export function getData(id: string): any {
    if (id === "") {
      return null;
    }
    let data = localStorage.getItem(id);
    if (data === null) {
      localStorage.setItem(id, "[]");
      return [];
    } else {
      return JSON.parse(data);
    }
  }
  
  export function setData(key: string, data: string) {
    localStorage.setItem(key, data);
  }
