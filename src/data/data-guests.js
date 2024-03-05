const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const createName = () => {
  const firstName = ['李', '王', '张', '刘', '陈', '杨', '赵', '黄', '周', '吴', '郑', '胡', '孙', '朱', '高', '林'];
  const lastName = ['芳', '强', '军', '娜', '英', '敏', '慧', '香', '伟'];
  return `${firstName[random(0, firstName.length - 1)]}*${lastName[random(0, lastName.length - 1)]}`;
}

const createPhone = () => {
  const prefix = ['139', '131', '168', '189', '134', '156'];
  return `${prefix[random(0, prefix.length - 1)]}****${random(1000, 9999)}`;
}

const createID = () => `123456${random(1000, 9999)}`;

export const createFakeGuests = () => Array(30).fill(1).map(() => ({
  fullName: createName(),
  phone: createPhone(),
  nationalID: createID(),
}));

