const api = "http://localhost:8000";

export const popService = {
  getPops,
  getById,
  removePopById,
  updatePopPrice,
  newPop,
  getSlides,
  updateInCart,
};

async function getPops() {
  try {
    const response = await fetch(`${api}/products`);
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

async function getSlides() {
  try {
    const response = await fetch(`${api}/slides`);
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

async function getById(popId) {
  try {
    const response = await fetch(`${api}/products/${popId}`);
    const data = await response.json();

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

    return data;
  } catch (error) {
    console.error("Error updating pop price:", error);
    throw error;
  }
}

async function updateInCart(pop) {
  try {
    const response = await fetch(`${api}/products/${pop.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: pop.id,
        category: pop.category,
        productType: pop.productType,
        type: pop.type,
        price: pop.price,
        details: pop.details,
        image1: pop.image1,
        image2: pop.image2,
        inCart: pop.inCart,
        QTY: pop.QTY,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to update pop inCart. Status: ${response.status}`
      );
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error updating pop inCart:", error);
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

    return data;
  } catch (error) {
    console.error("Error creating new pop:", error);
    throw error;
  }
}
