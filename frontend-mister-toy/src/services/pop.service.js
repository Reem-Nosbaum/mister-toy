const api = "http://localhost:8000";

export const popService = {
  getPops,
  getById,
  removePopById,
  updatePopPrice,
  newPop,
  // save,
  // getEmptyPop,
};

async function getPops() {
  try {
    const response = await fetch(`${api}/products`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

async function getById(popId) {
  try {
    const response = await fetch(`${api}/products/${popId}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

async function removePopById(popId) {
  try {
    const response = await fetch(`${api}/products/${popId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to remove pop. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error removing pop:", error);
    throw error;
  }
}

async function updatePopPrice(popId, price) {
  try {
    const response = await fetch(`${api}/products/${popId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: price,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to update pop price. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error updating pop price:", error);
    throw error;
  }
}

async function newPop(
  category,
  productType,
  type,
  price,
  details,
  image1,
  image2
) {
  try {
    const response = await fetch(`${api}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: category,
        productType: productType,
        type: type,
        price: price,
        details: details,
        image1: image1,
        image2: image2,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to create new pop. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("New pop created:", data);
    return data;
  } catch (error) {
    console.error("Error creating new pop:", error);
    throw error;
  }
}

// async function save(pop) {
//   var savedPop;
//   if (pop.id) {
//     savedPop = await storageService.put(STORAGE_KEY, pop);
//   } else {
//     savedPop = await storageService.post(STORAGE_KEY, pop);
//   }
//   return savedPop;
// }

// function getEmptyPop() {
//   return {
//     date: "Susita-" + (Date.now() % 1000),
//     price: utilService.getRandomIntInclusive(1000, 9000),
//   };
// }

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))
