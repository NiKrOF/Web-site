package StudyShop.session;

import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Component
public class SessionStorage
{
    private Map<String, WishList> SessionsMap;
    public SessionStorage() {SessionsMap = new HashMap<>();}
    public WishList GetData(HttpSession session)
    {
        String sessId = session.getId();
        WishList data = SessionsMap.get(sessId);
        if(data == null){data = new WishList();SessionsMap.put(sessId, data);}
        return data;
    }
}
