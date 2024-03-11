using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class move : MonoBehaviour
{
    public float moveSpeed = 1.0f; // 移动速度，每秒移动的距离
    public float spawnRate = 0.9f;
    public float zStart = 0f;
    public float zEnd = 0f;
    private float nextSpawnTime = 0.0f;
    private int direction = 1;

    // z 轴从
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Time.time > nextSpawnTime)
        {

            nextSpawnTime = Time.time + spawnRate;
            direction = direction * (-1);

        }
        float total_len = zEnd - zStart;
        float pos_z_delta = (nextSpawnTime - Time.time) * (zEnd - zStart);
        if (direction == 1)
        {
            float moveDistance = zStart + pos_z_delta;
            Vector3 currentPosition = transform.position;
            currentPosition.z = moveDistance;
            transform.position = currentPosition;
        }
        else
        {
            float moveDistance = zEnd - pos_z_delta;
            Vector3 currentPosition = transform.position;
            currentPosition.z = moveDistance;
            transform.position = currentPosition;
        }
    

        // 如果需要循环移动，可以取消下面的注释
        // if (transform.position.z >= 10) // 设置移动的终点位置
        // {
        //     transform.position = new Vector3(transform.position.x, transform.position.y, -10); // 重置Cube位置
        // }
    }
}
