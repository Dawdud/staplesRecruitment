import { shallowMount } from '@vue/test-utils';
import pagination from '@/views/pagination.vue';
import Details from '@/views/Details.vue';

describe('pagination.vue', () => {
  it('renders pages of products when props passed', () => {
    const currentPage = 1;
    const pageCount = 4;
    const pagesList = [];
    const wrapper = shallowMount(pagination, {
      propsData: { currentPage, pageCount, pagesList },
    });
    expect(wrapper.props().currentPage).toBe(1);
    
  });
});

describe('pagination.vue', () => {
  it('set amount of pages in component', () => {
    const currentPage = 1;
    const pageCount = 4;
    const pagesList = [];
    const wrapper = shallowMount(pagination, {
      propsData: { currentPage, pageCount, pagesList },
    });
    
    expect(wrapper.props().pageCount).toBe(4);
  });
});




describe('Deatils.vue', () => {
  it('renders products when data props is passed', () => {
    
    const data = {
      "id": "0000",
      "general": {
        "presentable_id": "0000",
        "name": "name",
        "description": "description"
      },
      "brand": {
        "name": "name"
      },
      "images": {
        "primary": {
          "large": "https://i.imgur.com/zYcibjw.jpg"
        }
      }
    };
    const expected = {
      "id": "0000",
      "general": {
        "presentable_id": "0000",
        "name": "name",
        "description": "description"
      },
      "brand": {
        "name": "name"
      },
      "images": {
        "primary": {
          "large": "https://i.imgur.com/zYcibjw.jpg"
        }
      }
    };
    
    const parrentData = "modal";
    const wrapper = shallowMount(Details, {
      propsData: { data, parrentData },
    });
    
    expect(wrapper.props('data')).toMatchObject(expected);
  });
});

describe('Deatils.vue', () => {
  it('passes parrent name to child component', () => {
    
    const data = {
      "id": "0000",
      "general": {
        "presentable_id": "0000",
        "name": "name",
        "description": "description"
      },
      "brand": {
        "name": "name"
      },
      "images": {
        "primary": {
          
        }
      }
    };
   
    
    const parrentData = "modal";
    const wrapper = shallowMount(Details, {
      propsData: { data, parrentData },
    });
    expect(wrapper.props('parrentData')).toBe("modal");
    
  });
});
