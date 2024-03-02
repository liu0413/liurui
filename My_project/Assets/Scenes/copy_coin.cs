using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class copy_coin : MonoBehaviour
{
    public GameObject objectToSpawn;
    public float spawnRate = 1.0f;
    private float nextSpawnTime = 0.0f;

    void Update()
    {
        if (Time.time > nextSpawnTime)
        {

            GameObject game_object = Instantiate(objectToSpawn, transform.position, transform.rotation);
            game_object.SetActive(true);
            transform.position = objectToSpawn.transform.position;
            nextSpawnTime = Time.time + spawnRate;
        }
    }
}
