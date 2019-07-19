package myspring.user.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import myspring.user.vo.UserVO;
//@Repository("userDao")
public class UserDaoImpl implements UserDao {

	@Autowired
    private SqlSession session;
	
	@Override
	public UserVO read(String id) {
		UserVO user  = session.selectOne("userNS.selectUserById", id);
		return user;
	}

	public List<UserVO> readAll() {
		List<UserVO> userList = session.selectList("userNS.selectUserList");
		return userList;
	}
	
	public void insert(UserVO user) {
		session.update("userNS.insertUser", user);
		System.out.println("등록된 Record UserId=" + user.getUserId() + " Name=" + user.getName());
	}

	@Override
	public void update(UserVO user) {
		session.update("userNS.updateUser", user);
	}

	@Override
	public void delete(String id) {
		session.delete("userNS.deleteUser", id);
		System.out.println("삭제된 Record with ID = " + id ); 
	}




	

}
